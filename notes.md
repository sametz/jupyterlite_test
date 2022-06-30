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

## Adding NMR content

- Holoviews and panel were not automatically recognized. 
  - to use these libraries with Jupyterlite, this should work:
```
import piplite
await piplite.install(['bokeh', 'jupyter_bokeh', 'holoviews', 'panel'])
```
- however, `sparse` and `nmrsim` can't be imported this way b/c of numba
  - TODO: either figure out how to use `sparse` in jupyterlite, 
or lobotomize sparse routines from `nmrsim`.