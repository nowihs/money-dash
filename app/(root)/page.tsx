import HeaderBox from '@/components/HeaderBox/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar/RightSidebar';

const Home = () => {
    const loggedIn = {
        firstName: 'Shi Won',
        lastName: 'Lee',
        email: 'shi.won.lee@crateofhemp.com'
    };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome, "
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.45}
                    />
                </header>

                Recent Transactions Here
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[ { currentBalance: 124.50 }, { currentBalance: 125.30 } ]}
            />
        </section>
    )
}

export default Home;