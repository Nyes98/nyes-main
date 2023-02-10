type Props = {
  getWallet: () => void;
  wallet: Array<string>;
  nickname: Array<string>;
  getBalance: () => void;
  balance: Array<string>;
};

const Component: React.FC<Props> = ({
  getWallet,
  wallet,
  nickname,
  getBalance,
  balance,
}) => {
  const test = (str: string): void => {
    console.log(str);
  };
  return (
    <div>
      {nickname.map((item: string, index: number) => (
        <li
          key={`nickname-${index}`}
          onClick={() => {
            {
              test(wallet[index]);
            }
          }}
        >
          {item}
        </li>
      ))}

      {balance.map((item: string, index: number) => (
        <div
          onClick={() => {
            console.log(item);
          }}
          key={`balance-${index}`}
        >
          {item}
        </div>
      ))}
      <button
        onClick={() => {
          getWallet();
          // getBalance();
        }}
      >
        지갑 정보 가져오기
      </button>
    </div>
  );
};
export default Component;
