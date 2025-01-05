'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('upload');
  const [paymentScreenshot] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showModal, setShowModal] = useState(true);


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      simulateUploadProgress();
    }
  };

  const simulateUploadProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);
  };

  const identifyImage = async (additionalPrompt: string = "") => {
    if (!image) return;

    setLoading(true);
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      const imageParts = await fileToGenerativePart(image);
      const result = await model.generateContent([ 
        `Analyze the provided house layout image and generate a concise Vastu Dosha report with the following details:
Directional Orientation: Briefly evaluate the main entrance, room placement, and their intended usage based on Vastu principles.
Vastu Doshas: Identify any flaws or imbalances in the layout, highlighting key areas of concern.
          ${additionalPrompt}`,
        imageParts,
      ]);
      const response = await result.response;
      const text = response
        .text()
        .trim()
        .replace(/\`\`\`/g, "")
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/-\s*/g, "")
        .replace(/\n\s*\n/g, "\n");

      setResult(text);
      setActiveTab('result');
    } catch (error) {
      console.error("Error identifying image:", error);
      setResult(error instanceof Error ? `Error identifying image: ${error.message}` : "An unknown error occurred while identifying the image.");
    } finally {
      setLoading(false);
    }
  };

  const fileToGenerativePart = (file: File) => {
    return new Promise<{ inlineData: { data: string; mimeType: string } }>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result as string;
        const base64Content = base64data.split(',')[1];
        resolve({
          inlineData: {
            data: base64Content,
            mimeType: file.type,
          },
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Payment Required</h2>
      <Image
        src="/path-to-popup-image.jpeg" // Replace with the actual path to your image
        alt="Payment Required"
        width={400}
        height={300}
        className="mx-auto"
      />
      <p className="text-gray-700 mt-4 text-center">
        To access your detailed Vastu report, please pay a minimal amount of <span className="text-green-600 font-bold">₹299</span>.
      </p>
      <p className="text-gray-700 mt-2 text-center">
        Upload your payment screenshot to proceed.
      </p>
      <div className="mt-6">
        <Label htmlFor="payment-upload" className="text-lg font-medium text-gray-700">
          Upload Screenshot
        </Label>
        <Input
          id="payment-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mt-2"
        />
        {paymentScreenshot && (
          <div className="mt-4">
            <p className="text-sm text-gray-500">File: {paymentScreenshot.name}</p>
            <Progress value={uploadProgress} className="w-full mt-2" />
          </div>
        )}
      </div>
      <Button
        onClick={() => setShowModal(false)}
        disabled={uploadProgress < 50}
        className="w-full bg-black hover:bg-gray-800 text-white mt-6"
      >
        Proceed
      </Button>
    </div>
  </div>
)}

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-black">VastuAI Analysis</h1>
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-black">Vastu Dosha Analyzer</CardTitle>
              <CardDescription>Upload your house layout for an AI-powered Vastu analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upload">Upload</TabsTrigger>
                  <TabsTrigger value="result" disabled={!result}>Result</TabsTrigger>
                </TabsList>
                <TabsContent value="upload">
                  <form className="space-y-6">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="image-upload" className="text-lg font-medium text-gray-700">Upload your house layout</Label>
                      <Input 
                        id="image-upload" 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-black hover:file:bg-gray-200"
                      />
                      {image && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-500">File: {image.name}</p>
                          <Progress value={uploadProgress} className="w-full mt-2" />
                        </div>
                      )}
                    </div>
                    <Button
                      onClick={() => identifyImage()}
                      disabled={!image || loading}
                      className="w-full bg-black hover:bg-gray-800 text-white"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Upload className="mr-2" />
                          Identify Vastu Dosha
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="result">
                  {result && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-black mb-4">Vastu Dosha Analysis:</h3>
                      <div className="prose max-w-none">
                        {result.split("\n").map((line, index) => {
                          const isVastuDosha = line.toLowerCase().includes("vastu dosha");
                          return (
                            <p key={index} className={`mb-2 ${isVastuDosha ? "text-red-600 font-semibold flex items-center" : "text-gray-800"}`}>
                              {isVastuDosha && <AlertCircle className="mr-2 h-5 w-5" />}
                              {line}
                            </p>
                          );
                        })}
                      </div>
                      <Button
                        onClick={() => window.open("https://forms.gle/BfbynytCCSfZmAEr9", "_blank")}
                        className="w-full bg-black hover:bg-gray-800 text-white mt-6"
                      >
                        Consult a Vastu expert
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
