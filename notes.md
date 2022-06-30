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
  - `panel` roadmap indicates that they plan to be able to export panel apps as standalone WASM apps in the future!
  - to use these libraries with Jupyterlite, this should work:
```
import piplite
await piplite.install(['bokeh', 'jupyter_bokeh', 'holoviews', 'panel'])
```

  - however, `sparse` and `nmrsim` can't be imported this way b/c of numba
    - TODO: either figure out how to use `sparse` in jupyterlite, 
or lobotomize sparse routines from `nmrsim`.
      - It seems that `numba` to WASM (pyodide, jupyterlab)
      is an active discussion but it's held up by a dependency.
      - Therefore, copy the guts of `nmrsim` over
but hack the code so that sparse isn't used.
      
  - some weird stuff going on. Code was hashed out in qm.py, 
and the build copied over the altered code, 
but when jupyterlite was launched 
Chrome was still seeing the original file.

Refreshing in Safari seemed to work though?

Some interactive panels worked, some didn't on Chrome, 
and no interactivity on Safari when `jupyter lab` run from terminal.

Refreshing seemed to fix things. Chrome needed a cache clear.
