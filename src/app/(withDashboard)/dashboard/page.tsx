import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}{" "}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.email}{" "}
          </h1>
          <Image
            src={session?.user?.image ?? "/default-user.png"}
            width={100}
            height={100}
            alt="user Img"
            className="mx-auto rounded-3xl"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
