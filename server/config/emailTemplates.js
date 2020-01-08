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
            <a href="${process.env.REDIRECT_DOMAIN}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${process.env.REDIRECT_DOMAIN}/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
