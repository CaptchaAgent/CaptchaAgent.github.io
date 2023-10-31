---
title: Discord GEN
description: It's your concern.
---

## Introduction

CaptchAgent enables you to run model inference tasks in a locally based environment. That is, you can perform ultra-high concurrency computer vision tasks (e.g., image classification, object detection, image segmentation) and you can process hundreds of images in seconds.

For example, you can implement your own CAPTCHA-specific decoder without relying on any third-party solver service. So you don't need to share a queue with anyone, you don't need to wait tens or even hundreds of seconds for a queue, all processing is instantly responsive.

In addition, we packaged all models in ModelHub into ONNX format. At the same time, downstream tasks run inference tasks with `onnxruntime`, meaning you can run AI models even if you don't have a GPU in your runtime environment. 
