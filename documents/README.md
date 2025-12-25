# 文档目录

这个目录用于存放可下载的文档文件。

## 如何添加文档

1. 将你的文档文件复制到这个 `documents/` 目录中
2. 更新根目录下的 `documents-list.json` 文件，添加新文档的信息：

```json
[
    {
        "name": "你的文档名称.pdf",
        "url": "documents/你的文档名称.pdf",
        "size": "文件大小（如：1.5 MB）"
    }
]
```

3. 使用 Git 提交并推送更改：
   ```bash
   git add documents/你的文档名称.pdf documents-list.json
   git commit -m "添加新文档"
   git push
   ```

## 支持的文件类型

- PDF 文档 (.pdf)
- Word 文档 (.doc, .docx)
- Excel 表格 (.xls, .xlsx)
- PowerPoint 演示文稿 (.ppt, .pptx)
- 压缩文件 (.zip, .rar)
- 文本文件 (.txt, .md)
- 图片文件 (.jpg, .png, .gif)
- 视频文件 (.mp4)
- 音频文件 (.mp3)
- 其他文件类型

## 注意事项

- 文件大小建议不超过 50MB（GitHub 有文件大小限制）
- 文件名建议使用英文或数字，避免特殊字符
- 如果文件名包含中文，确保使用 UTF-8 编码

