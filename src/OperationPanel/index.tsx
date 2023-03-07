import styled from '@emotion/styled'
import { InputNumber, Space, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
const { Text } = Typography
function OperationPanel(): JSX.Element {
  return (
    <Container>
      <Title level={4}>控制面板</Title>
      <Space>
        <Text>化缘</Text>
        <InputNumber controls min={0} defaultValue={0}></InputNumber>
      </Space>
    </Container>
  )
}

const Container = styled.div`
  background: #538293;
  padding: 20px;
`

export default OperationPanel
