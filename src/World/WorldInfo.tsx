import styled from '@emotion/styled'
import { Card, Descriptions } from 'antd'

function WorldBaseInfo(): JSX.Element {
  return (
    <WorldBase>
      <Descriptions title="承华4年春1日(春节)" column={3}>
        <Descriptions.Item label="天气">晴</Descriptions.Item>
        <Descriptions.Item label="时间">12:00</Descriptions.Item>
      </Descriptions>
    </WorldBase>
  )
}

const WorldBase = styled(Card)`
  background: #cba54f;
  border: none;
  border-radius: 0;
`

export default WorldBaseInfo
