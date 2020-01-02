module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align:center; ">
          <h3>I would like your inputs</h3>
          <p>
            Please answer the following questions:
          </p>
          <p>
            ${survey.body}
          </p>
          <div>
            <a href="${process.env.REDIRECT_DOMAIN}/api/thankyou">Yes</a>
          </div>
          <div>
            <a href="${process.env.REDIRECT_DOMAIN}/api/thankyou">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
