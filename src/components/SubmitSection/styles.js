export default theme => ({
  root: {
    width: '100%',
  },
  label: {
    color: 'white',
    fontSize: 20,
    top: 10,
    '&:focused': {
      color: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    },
  },
  input: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
    color: 'white',
    marginBottom: 68,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
      marginBottom: 40
    },
  },
  underline: {
    borderBottom: '2px solid #100d53',
    '&:before': {
      borderBottom: '2px solid white'
    },
    '&:after': {
      borderBottom: '2px solid #e25e70'
    },
    '&:hover': {
      borderBottom: '2px solid #e25e70'
    }
  },
  shrink: {
    transform: 'translate(0, -10px) scale(0.75)',
    color: 'white'
  },
  focused: {
    color: 'white !important'
  }
});
