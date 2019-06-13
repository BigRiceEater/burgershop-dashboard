import { SiteRoute } from 'util/site-route';

export class CrumbMaker {
  static fromRelativePath(path) {
    const segments = path.split('/').filter(p => p !== '');

    if (segments.length === 0) {
      return [{ to: SiteRoute.home.path, display: SiteRoute.home.display }];
    }

    const crumbs = segments.reduce((acc, segment) => {
      const lastsegment = acc.slice(-1)[0];
      if (!lastsegment)
        return [
          { to: `/${segment}`, display: SiteRoute[segment].display || segment }
        ];

      const nextCrumb = {
        to: `${lastsegment.url}/${segment}/`,
        display: SiteRoute[segment].display || segment
      };
      return [...acc, nextCrumb];
    }, []);
    return crumbs;
  }
}
