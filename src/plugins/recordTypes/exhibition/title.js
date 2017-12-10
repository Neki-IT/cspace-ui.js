export default pluginContext => (data) => {
  const {
    getPart,
  } = pluginContext.recordDataHelpers;


  if (!data) {
    return '';
  }

  const common = getPart(data, 'exhibitions_common');

  if (!common) {
    return '';
  }

  const exhibitionNumber = common.get('exhibitionNumber');
  const title = common.get('title');

  return [exhibitionNumber, title].filter(part => !!part).join(' – ');
};
