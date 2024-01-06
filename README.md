This package is modified version of gradio==3.50.2. Why chose 3.50.2? Gradio4.x gr.File uploads is extremely slow, see [issue](https://github.com/gradio-app/gradio/issues/6540)



## Features
* event reloader
* persistant component

## How to package
```python
python -m build --wheel
```