const path = require("path");

exports.handler = async function (event, context) {
  const { WebC } = await import("@11ty/webc");

  const page = new WebC();

  page.setBundlerMode(true);
  page.defineComponents(path.join(__dirname, "../../src/components/**.webc"));

  page.setContent(event.body);

  const compiled = await page.compile();

  return {
    statusCode: 200,
    body: JSON.stringify(compiled),
  };
};
