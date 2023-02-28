import styled from '@emotion/styled'
import { Card, Descriptions } from 'antd'

function TempleBaseInfo(): JSX.Element {
  return (
    <TempleBase>
      <Descriptions title="三八二十寺" column={1}>
        <Descriptions.Item label="金币">500</Descriptions.Item>
        <Descriptions.Item label="信仰">0</Descriptions.Item>
        <Descriptions.Item label="食物">40</Descriptions.Item>
      </Descriptions>
    </TempleBase>
  )
}

const TempleBase = styled(Card)`
  background: #cba54f;
  border: none;
  border-radius: 0;
`

export default TempleBaseInfo
