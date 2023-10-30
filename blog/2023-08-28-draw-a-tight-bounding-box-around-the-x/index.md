---
slug: draw-a-tight-bounding-box-around-the-x
title: Draw a tight bounding box around the X
authors: [QIN2DIM]
tags: [HCI challenge]
---

## Milestone

[[Challenge] Draw a tight bounding box around the X  #592](https://github.com/QIN2DIM/hcaptcha-challenger/issues/592)

Similar to the [point type challenge](./please-click-on-the-x), the principle of both similar challenges is object detection.

However, the output of the `bounding box` method changes from the coordinates of the center point of the bounding box to the start and end points.

```yaml
prompt: Draw a tight bounding box around the guіtаr.
type: bounding box
```

![263652272-dbe5f4f3-c141-4e35-bbca-e20917408be9](https://r2-datalake.echosec.top/blog-obs/2023/10/a8e4fd61370418f5e35ebdea07f45cba.png)

