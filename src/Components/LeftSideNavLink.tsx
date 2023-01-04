import React from 'react'

interface LeftNavTabProps {
  link: React.ReactElement
}

const LeftSideNavLink: React.FC<LeftNavTabProps> = ({ link }) => {
  return <div>{link}</div>
}

export default LeftSideNavLink
