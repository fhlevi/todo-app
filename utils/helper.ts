export const resolvePath = (obj: any, path: any) => {
  const cleanedPath = path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '');
  const pathArray = cleanedPath.split('.');

  return pathArray.reduce((prev: any, curr: any) => prev?.[curr], obj);
};

export const prettyDate = (date: any) => {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "full",
		timeStyle: "short",
	}).format(date);
}
