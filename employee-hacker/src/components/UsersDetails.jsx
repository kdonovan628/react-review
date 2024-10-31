const UsersDetails = ({ userDetails, setShowList }) => {
  const { name, email, company } = userDetails;

  return (
    <>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h2>{company.name}</h2>

      <button onClick={() => setShowList(true)}>Back</button>
    </>
  )
}

export default UsersDetails