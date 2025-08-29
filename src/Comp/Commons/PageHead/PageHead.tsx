interface PropsTypes {
  title: string;
}

const PageHead = (props: PropsTypes) => {
  const { title } = props;

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="icon" href="/Images/icon.png" type="image/x-icon" />
    </>
  );
};

export default PageHead;
