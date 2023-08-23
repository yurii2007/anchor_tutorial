import { Profile } from "./Profile/Profile";
import user from '../data/user.json';
import { Statistics } from "./Statistics/Statistics";
import stats from '../data/data.json';
import friends from '../data/friends.json';
import { FriendsList } from "./FriendsList/FriendsList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <div>
    <Profile {...user}/>
    <Statistics title="Upload stats" stats={stats} />
    <Statistics stats={stats} />
    <FriendsList friends={friends} />
    <TransactionHistory items={transactions} />
    </div>
  );
};