# Notes To Self

## Development

- choosing Python 8 to match GH Actions
- `python -m pip install -r requirements.txt`
- new project: `jupyter lite init`
- build: `jupyter lite build` but defaults to output in `_output` folder.
  - This project was initiated with their template, 
and it seems they use custom destinations. 
  - So, stealing from the template's GH action: 
```
jupyter lite build --contents content
```
- serve locally: `jupyter lite serve`
