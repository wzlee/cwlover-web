package com.wzlee.cwl;

import static org.junit.Assert.*;

import java.io.IOException;
import java.text.ParseException;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.wzlee.cwl.domain.Variety;
import com.wzlee.cwl.repositories.VarietyRepository;

@RunWith(SpringJUnit4ClassRunner.class) 
@ContextConfiguration(locations={
        "file:src/main/webapp/WEB-INF/spring/*.xml", 
        "file:src/main/webapp/WEB-INF/spring/appServlet/*.xml"})
public class MongoDBTest {
	
	private static final Logger logger = LoggerFactory.getLogger(MongoDBTest.class);
	
	@Autowired
	GridFsOperations operations;
	@Autowired 
	VarietyRepository varietyRepository;
	
	@Test
	public void test() {
		fail("Not yet implemented");
	}

	@Test
	public void JsoupData() throws ParseException{
		logger.info("greb data begin...");
		long startMili=System.currentTimeMillis();
		String url = "http://dog.chongwujiaoyi.com/";
		int i = 0;
		try {
			Connection conn = Jsoup.connect(url).timeout(100000).maxBodySize(10000000);
			logger.info("Jsoup与["+url+"]建立连接成功!");
			String html = new String(conn.execute().bodyAsBytes(),"utf8");
			Document doc = Jsoup.parse(html);
//			System.out.println(doc.html());
			logger.info("Jsoup成功获取连接的Document!");
			Elements gss = doc.select(".gs");
			for(Element gs:gss){
				varietyRepository.save(new Variety(gs.child(1).text()+"("+gs.child(2).text()+")","dog","http://dog.chongwujiaoyi.com/"+gs.child(0).child(0).attr("src"),"可爱"));
				i++;
				logger.info("插入第["+i+"]条数据到MongoDB...");
			}
			long endMili=System.currentTimeMillis();
			logger.info("Jsoup成功抓取["+i+"]条数据并插入mongodb,总共耗时：["+(endMili-startMili)/1000+"]秒");
		} catch (IOException e) {
			logger.info("Jsoup与建立连接失败!错误信息:"+e.getLocalizedMessage());
		}
		logger.info("greb data end...");
	}
	
	@Test
	public void filegridTest(){
//		Resource file = new Resource();
//		operations.store(new File("E:/Cracked.zip")., "text.text");
//		FileMetadata metadata = new FileMetadata();
//	    // populate metadata
//	    Resource file = new File("E:/Cracked.zip"); // lookup File or Resource
//
//	    operations.store(file.getInputStream(), "filename.txt", metadata);
	}
}
