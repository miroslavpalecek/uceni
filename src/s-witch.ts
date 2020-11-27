const aa = 'abcde'

switch(aa.indexOf('b')) {
    case 1:
      console.log('jedna')
      break;
    case 5:
      console.log('petka')
      break;
    case 2:
      console.log('dva')
      break;
    case 3:
      console.log('tri')
      break;
    case 4:
      console.log('ctyri')
      break;
    case 0:
      console.log('nula')
      break;
    default:
      console.log('out of range')
  }