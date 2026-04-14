import CategoryDistribution from './components/CategoryDistribution.jsx'
import MemberList from './components/MemberList.jsx'
import PageHeader from './components/PageHeader.jsx'
import Panel from './components/Panel.jsx'
import RevenueCard from './components/RevenueCard.jsx'
import Sidebar from './components/Sidebar.jsx'
import StatCard from './components/StatCard.jsx'
import {
  categoryDistribution,
  navigationItems,
  pageCopy,
  recentMembers,
  stats,
  userProfile,
} from './data/dashboardData.js'
import './App.css'

function App() {
  return (
    <div className="dashboard-shell">
      <Sidebar
        title={pageCopy.brandTitle}
        subtitle={pageCopy.brandSubtitle}
        items={navigationItems}
        profile={userProfile}
      />

      <main className="dashboard-main">
        <PageHeader title={pageCopy.pageTitle} subtitle={pageCopy.pageSubtitle} />

        <section className="stats-grid" aria-label="Resumo geral">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <section className="dashboard-grid" aria-label="Indicadores principais">
          <Panel>
            <RevenueCard
              title={pageCopy.revenueTitle}
              amount={pageCopy.revenueAmount}
              description={pageCopy.revenueDescription}
            />
          </Panel>

          <Panel>
            <CategoryDistribution
              title={pageCopy.distributionTitle}
              items={categoryDistribution}
            />
          </Panel>
        </section>

        <Panel className="members-panel">
          <MemberList title={pageCopy.membersTitle} members={recentMembers} />
        </Panel>
      </main>
    </div>
  )
}

export default App
