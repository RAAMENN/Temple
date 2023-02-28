import { ConfigProvider, Space, Row, Col } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import styled from '@emotion/styled'
import TempleBaseInfo from '@/Temple/TempleBaseInfo'
import TempleTimeLine from '@/Temple/TempleTimeLine'
import WorldBaseInfo from '@/World/WorldInfo'
import TempleDetailInfo from '@/Temple/TempleDetailInfo'

function Homepage(): JSX.Element {
  return (
    <ConfigProvider locale={zhCN}>
      <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 16 }} style={{ height: '100%' }}>
        <LeftContainer span={5}>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <TempleBaseInfo />
            <TempleTimeLine />
          </Space>
        </LeftContainer>
        <CenterContainer span={14}>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <WorldBaseInfo />
            <OperationContainer>操作区</OperationContainer>
          </Space>
        </CenterContainer>
        <RightContainer span={5}>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <TempleDetailInfo />
            <TaskBoard>任务板</TaskBoard>
          </Space>
        </RightContainer>
      </Row>
    </ConfigProvider>
  )
}

const LeftContainer = styled(Col)`
  background: #2a494b;
`
const CenterContainer = styled(Col)`
  background: #2a494b;
`
const RightContainer = styled(Col)`
  background: #2a494b;
`

const OperationContainer = styled.div`
  background: #538293;
`

const TaskBoard = styled.div`
  background: #538293;
`
export default Homepage
