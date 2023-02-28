import styled from '@emotion/styled'
import { Card, Descriptions } from 'antd'

function TempleDetailInfo(): JSX.Element {
  return (
    <TempleDetail>
      <Descriptions title="寺庙状态" column={1}>
        <Descriptions.Item label="僧人数">4/5</Descriptions.Item>
        <Descriptions.Item label="僧舍等级">1</Descriptions.Item>
      </Descriptions>
    </TempleDetail>
  )
}

const TempleDetail = styled(Card)`
  background: #cba54f;
  border: none;
  border-radius: 0;
`

export default TempleDetailInfo
