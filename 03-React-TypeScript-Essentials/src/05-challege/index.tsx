type ProfileCardProps = {
  type: 'basic' | 'advanced';
  name: string;
  email?: string;
};

const Component = (props: ProfileCardProps) => {
  const { type, name, email } = props;

  const alertType = type === 'basic' ? 'success' : 'danger';
  const className = `alert alert-${alertType}`;

  return (
    <article className={className}>
      <h2>User : {name}</h2>
      {type === 'advanced' ? <h2>Email: {email}</h2> : null}
    </article>
  );
};

export default Component;
