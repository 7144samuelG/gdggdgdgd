import { Button } from "@/components/ui/button";
import { AuthNavBar } from "@/componentsPage/dashboard/auth-navnar";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { useNavigate } from "react-router";
export const MarketPlace = () => {
  const data = [
    {
      name: "samuel Gichuki",
      verifies: true,
      stars: "4.6",
      trades: 2344,
      timestamp: 1,
      coinName: "cBTC",
      coinsNumber: 12,
      sellingPrice: 2455,
      contact: "samutech144@gmail.com",
      isActive: true,
    },
  ];
 
  const navigate = useNavigate();
  const parchaseNavaigate = () => {
    navigate("/purchase");
  };
  return (
    <div className={cn("pb-[100px]  body flow overflow-x-hidden")}>
      <AuthNavBar />
      <div className="max-w-[1280px] h-[100vh] mx-auto px-4">
       
        {/* <div className="flex justify-center my-5">
        <Search/>
        </div> */}
        {data.map((val) => (
          <div key={val.name}>
            <div className="rounded-md px-10 py-5 bg-white flex justify-between">
              <div className="">
                <h1>
                  name:{val.name} <span>{}</span>
                </h1>
                <p className="flex space-x-1 items-center">
                  <Star className="text-orange-500" size={15} />
                  {val.stars}
                </p>
                <div className="flex space-x-1 items-center">
                  <p>Trades completed:{val.trades}</p>
                  <p>Trades</p>
                </div>
                <div className="flex space-x-1 items-center">
                  <p>posted time:{val.timestamp} hours ago</p>
                </div>
                <div className="flex space-x-1 items-center">
                  <p className="text-gray-500">contact info:{val.contact}</p>
                </div>
              </div>
              <div className="">
                <div>
                  <h1>coins name:{val.coinName}</h1>
                  <p>coins:{val.coinsNumber}</p>
                  <p>{val.isActive}</p>
                </div>
                <div>
                  <p>${val.sellingPrice}.00</p>
                  <Button className="w-[150px]" onClick={parchaseNavaigate}>
                    Buy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
