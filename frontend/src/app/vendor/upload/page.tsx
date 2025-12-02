"use client";

import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import { PageHero } from "../../../components/page-hero";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { FileUpload } from "../../../components/file-upload";

export default function VendorUploadPage() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [video, setVideo] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("description", productDescription);
      formData.append("price", price);
      formData.append("category", category);

      images.forEach((image) => {
        formData.append(`images`, image);
      });

      if (video) {
        formData.append("video", video);
      }

      const response = await fetch("http://localhost:4000/products/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload product");
      }

      setSubmitStatus({
        type: "success",
        message: "Product uploaded successfully!",
      });

      // Reset form
      setProductName("");
      setProductDescription("");
      setPrice("");
      setCategory("");
      setImages([]);
      setVideo(null);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to upload product",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-0">
      <div className="flex items-center gap-4">
        <Link href="/vendor/dashboard">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <PageHero
        eyebrow="Create listing"
        title="Upload a new product to the marketplace."
        description="Add images, video, and product details. All media will be reviewed before going live."
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="border-white/10 bg-zinc-950">
          <CardHeader>
            <CardTitle>Product Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-white mb-2 block">
                Product Name *
              </label>
              <Input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="e.g., Carbon Edge XM-14"
                required
                className="bg-black/40 border-white/20 text-white"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-white mb-2 block">
                Description *
              </label>
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Describe the product, features, and specifications..."
                required
                rows={4}
                className="w-full rounded-md border border-white/20 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-white mb-2 block">
                  Price ($) *
                </label>
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0.00"
                  required
                  min="0"
                  step="0.01"
                  className="bg-black/40 border-white/20 text-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-white mb-2 block">
                  Category *
                </label>
                <Input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g., Firearms, Ammo, Optics"
                  required
                  className="bg-black/40 border-white/20 text-white"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <FileUpload
          onImagesChange={setImages}
          onVideoChange={setVideo}
          maxImages={10}
          maxVideoDuration={30}
        />

        {submitStatus.type && (
          <Card
            className={`border-${
              submitStatus.type === "success" ? "green" : "red"
            }-500/50 bg-${
              submitStatus.type === "success" ? "green" : "red"
            }-950/20`}
          >
            <CardContent className="p-4">
              <p
                className={`text-sm ${
                  submitStatus.type === "success" ? "text-green-200" : "text-red-200"
                }`}
              >
                {submitStatus.message}
              </p>
            </CardContent>
          </Card>
        )}

        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-lime-400 text-black hover:bg-lime-300"
          >
            <Save className="h-4 w-4 mr-2" />
            {isSubmitting ? "Uploading..." : "Upload Product"}
          </Button>
          <Link href="/vendor/dashboard">
            <Button type="button" variant="outline" className="border-white/30 text-white">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

