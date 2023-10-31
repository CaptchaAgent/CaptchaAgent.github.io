---
title: Discord GEN
description: It's your concern.
---

## Introduction

CaptchaAgent allows you to run model inference tasks locally. That means you can process hundreds of images in seconds while performing ultra-concurrent computer vision tasks (such as image classification, object detection, and image segmentation).

For instance, you don't need to use any outside solver services to implement your own CAPTCHA-specific solver. This eliminates the need for you to wait tens or even hundreds of seconds in line or share queues with other people. Everything is processed in real time here.

In addition, we converted all ModelHub models to ONNX format. At the same time, downstream tasks use `onnxruntime` to run inference tasks, allowing you to run AI models even if your runtime environment lacks a GPU. 
