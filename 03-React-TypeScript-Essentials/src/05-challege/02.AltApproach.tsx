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
      {/* {props.type === 'advanced' && <p>Email: {props.email}</p>} */}
      {email && <h2>Email : {email}</h2>}
    </article>
  );
};

export default Component;
