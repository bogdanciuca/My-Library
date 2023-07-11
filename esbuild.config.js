require('esbuild').build({
    entryPoints: ['src/index.js'],
    outfile: 'dist/bundle.js',
    bundle: true,
    target: 'web',
    sourcemap: 'inline',
  }).catch(() => process.exit(1))