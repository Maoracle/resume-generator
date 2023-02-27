import React, { useState } from "react"
import { Button, Affix, Upload, Spin, message, Alert, Modal } from 'antd'
import './index.less'

export const Page: React.FC = () => {
  const [loading, updateLoading] = useState<boolean>(true)
  return (
    <React.Fragment>
      <Spin spinning={loading}>
        <Alert></Alert>
        <div className="page">
          template
        </div>
      </Spin>
    </React.Fragment>
  )
}

export default Page