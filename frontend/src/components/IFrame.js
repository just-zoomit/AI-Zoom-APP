function IFrame() {
  return (
    <iframe
      title="iframe-example"
      height="300px"
      width="100%"
      color="white"
      src={`${process.env.REACT_APP_PUBLIC_ROOT}/hello`}
      onLoad={(event) => {
      const iframeDocument = event.target.contentDocument;
        if (iframeDocument) {
          const styles = `
            <style>
              body {
                color: white; /* Change to the desired text color */
              }
            </style>
          `;
          iframeDocument.head.innerHTML += styles;
        }
      }}
    />
  );
}

export default IFrame;
