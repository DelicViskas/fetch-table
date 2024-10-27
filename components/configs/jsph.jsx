import Email from "../Email";

export const config = {
  columns: [
    { title: 'id', content: user => user.id },
    { title: 'name', content: ({name}) => name },
    { title: 'email', content: ({email}) => <Email email={email}/> },
    { title: 'username', content: ({username}) => username },
  ]
};