"use client";

import { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon, Video, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface FileUploadProps {
  onImagesChange?: (files: File[]) => void;
  onVideoChange?: (file: File | null) => void;
  maxImages?: number;
  maxVideoDuration?: number; // in seconds
}

export function FileUpload({
  onImagesChange,
  onVideoChange,
  maxImages = 10,
  maxVideoDuration = 30,
}: FileUploadProps) {
  const [images, setImages] = useState<File[]>([]);
  const [video, setVideo] = useState<File | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const validateImage = (file: File): string | null => {
    if (!file.type.startsWith("image/")) {
      return `${file.name} is not an image file`;
    }
    if (file.size > 10 * 1024 * 1024) {
      return `${file.name} exceeds 10MB limit`;
    }
    return null;
  };

  const validateVideo = async (file: File): Promise<string | null> => {
    if (!file.type.startsWith("video/")) {
      return `${file.name} is not a video file`;
    }
    if (file.size > 100 * 1024 * 1024) {
      return `${file.name} exceeds 100MB limit`;
    }

    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => {
        window.URL.revokeObjectURL(video.src);
        const duration = video.duration;
        if (duration > maxVideoDuration) {
          resolve(
            `Video duration (${duration.toFixed(1)}s) exceeds ${maxVideoDuration} second limit`,
          );
        } else {
          resolve(null);
        }
      };
      video.onerror = () => resolve("Failed to read video metadata");
      video.src = URL.createObjectURL(file);
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newErrors: string[] = [];
    const validFiles: File[] = [];

    if (images.length + files.length > maxImages) {
      newErrors.push(`Maximum ${maxImages} images allowed`);
      e.target.value = "";
      setErrors(newErrors);
      return;
    }

    files.forEach((file) => {
      const error = validateImage(file);
      if (error) {
        newErrors.push(error);
      } else {
        validFiles.push(file);
      }
    });

    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      setErrors([]);
    }

    const updatedImages = [...images, ...validFiles];
    setImages(updatedImages);
    onImagesChange?.(updatedImages);
    e.target.value = "";
  };

  const handleVideoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) {
      setVideo(null);
      onVideoChange?.(null);
      return;
    }

    const error = await validateVideo(file);
    if (error) {
      setErrors([error]);
      e.target.value = "";
      return;
    }

    setErrors([]);
    setVideo(file);
    onVideoChange?.(file);
  };

  const removeImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    onImagesChange?.(updated);
  };

  const removeVideo = () => {
    setVideo(null);
    onVideoChange?.(null);
    if (videoInputRef.current) {
      videoInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6">
      {/* Image Upload Section */}
      <Card className="border-white/10 bg-zinc-950">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-lime-300" />
                Product Images
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                Upload up to {maxImages} images (max 10MB each)
              </p>
            </div>
            <Badge className="bg-white/10 text-white">
              {images.length}/{maxImages}
            </Badge>
          </div>

          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="hidden"
            id="image-upload"
            disabled={images.length >= maxImages}
          />

          {images.length < maxImages && (
            <label htmlFor="image-upload">
              <Button
                type="button"
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 cursor-pointer"
                asChild
              >
                <span>
                  <Upload className="h-4 w-4 mr-2" />
                  Add Images
                </span>
              </Button>
            </label>
          )}

          {images.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative group aspect-square rounded-lg border border-white/10 overflow-hidden bg-black/40"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-red-600/90 hover:bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1 text-xs text-white truncate">
                    {image.name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Video Upload Section */}
      <Card className="border-white/10 bg-zinc-950">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Video className="h-5 w-5 text-lime-300" />
                Product Video
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                Upload a {maxVideoDuration}-second video clip (max 100MB)
              </p>
            </div>
            {video && (
              <Badge className="bg-lime-300 text-black">Video Selected</Badge>
            )}
          </div>

          <input
            ref={videoInputRef}
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="hidden"
            id="video-upload"
          />

          {!video ? (
            <label htmlFor="video-upload">
              <Button
                type="button"
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 cursor-pointer"
                asChild
              >
                <span>
                  <Upload className="h-4 w-4 mr-2" />
                  Add Video
                </span>
              </Button>
            </label>
          ) : (
            <div className="space-y-3">
              <div className="relative rounded-lg border border-white/10 overflow-hidden bg-black/40">
                <video
                  src={URL.createObjectURL(video)}
                  controls
                  className="w-full max-h-64"
                />
                <button
                  onClick={removeVideo}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-red-600/90 hover:bg-red-600 text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-zinc-400">{video.name}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Error Display */}
      {errors.length > 0 && (
        <Card className="border-red-500/50 bg-red-950/20">
          <CardContent className="p-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                {errors.map((error, index) => (
                  <p key={index} className="text-sm text-red-200">
                    {error}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

