import client from '@/db'
//instead of sending a request from a server back to the server-> directly call the database


async function getUserDetails() {
  const res=await client.user.findMany()
  return res
}

export default async function Home() {
  const userData = await getUserDetails();
  return (
    <>
    <div className=" m-3 ">
      {(userData) && (userData).length > 0 ? (
          (userData).map((item: any) => (
            <div className="flex flex-col " key={item.id}>
              <div className="">
                <div className="border p-8 rounded">
                  <div>id: {item?.id}</div>
                  <div>Name: {item?.username}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No users found</div>
        )}
    </div>
    </>
  );
}
