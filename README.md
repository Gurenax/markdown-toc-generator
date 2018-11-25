# Markdown Table of Contents Generator
Ever get tired of manually typing table of contents and putting anchor links one by one? Here is a small project that will help you automate that tedious task.

## Table of Contents
* **[Markdown Table of Contents Generator](#markdown-table-of-contents-generator)**
* **[Install](#install)**
* **[Parameters](#parameters)**
* **[Example](#example)**

## Install
```
yarn global add markdown-toc-generator
```
or
```
npm install -g markdown-toc-generator
```

## Parameters
- File name (`--file=`)
- Heading level (`--headingLevel=`)

## Examples
While at your markdown file's directory, run the following commands:
```
markdown-toc-generator --file=Example.md
markdown-toc-generator --file=Example.md --headingLevel=6
```