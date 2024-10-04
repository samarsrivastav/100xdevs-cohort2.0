import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user")
	return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();
  return (
    <>
    {(userData.res) && (userData.res).length > 0 ? (
        (userData.res).map((item: any) => (
          <div className="flex flex-col " key={item.id}>
            <div className="flex justify-center">
              <div className="border p-8 rounded">
                <div>Name: {item?.username}</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No users found</div>
      )}
    </>
  );
}
