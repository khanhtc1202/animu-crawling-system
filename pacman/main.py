import requests, os, time
from bs4 import BeautifulSoup
import config
import io_func

_config = config.local()
logging = _config['logging']
script_path = _config['script_path']
feed_src_path = _config['resource_path'] + 'feeds.json'

def get_rss_list():
    return io_func.load_json_data(feed_src_path)['data']
    
def download_xml(url):
    res = requests.get(url, verify=True)
    return BeautifulSoup(res.content, 'lxml')
    
def get_feeds(rss):
    return download_xml(rss).findAll('item')[:5]
    
def write_log(catched_site, msg):
    logging.warning(msg + '</br>')
    logging.warning('URL = ' + catched_site + '</br>')

def extract_site_by_anchor(site_url, anchor):
    try:
        soup = download_xml(site_url).find(anchor['tag'], anchor['css_selector'])
        return soup.a['href'] if soup.name != 'a' else soup['href']
    except Exception as error:
        write_log(site_url, error)
        return False

def extract_feed(rss, feed):
    item_link = feed.link.next_sibling.replace('\t','').replace('\n','')
    tor_url = extract_site_by_anchor(item_link, rss['anchor']) if rss['anchor'] else item_link
    return tor_url if tor_url else False
    
def download_media(url):
    try:
        command = script_path + 'download.sh ' + url
        os.system(command)
    except Exception as error:
        write_log(url, error)

def main():
    while True:
        for rss in get_rss_list():
            print "Req to:", rss['rss']
            feeds = get_feeds(rss['rss'])
            tor_list = [ extract_feed(rss, feed) for feed in feeds ]
            [ download_media(url) for url in tor_list ]
        print "Going to sleep for 0.5 day time"
        time.sleep(43200)

if __name__ == '__main__':
    main()
