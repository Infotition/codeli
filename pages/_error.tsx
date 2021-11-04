const Error = ({ statusCode }: { statusCode?: number }) => (
  <p>
    {statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}
  </p>
);

Error.getInitialProps = ({ res, err }) => {
  if (res) return res.statusCode;
  if (err) return err.statusCode;
  return 404;
};

export default Error;
