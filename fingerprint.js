<script>
  function initFingerprintJS() {
    FingerprintJS.load({token: 'LSxUKfYmUkTVQZJsyb1w'})
      .then(fp => fp.get())
      .then(result => console.log(result.visitorId));
  }
</script>
<script
  async
  src="https://cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs-pro@3/dist/fp.min.js"
  onload="initFingerprintJS()"
></script>