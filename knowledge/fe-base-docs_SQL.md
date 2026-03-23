一、基础

模式定义了数据如何存储、存储什么样的数据以及数据如何分解等信息，数据库和表都有模式。

主键的值不允许修改，也不允许复用（不能将已经删除的主键值赋给新数据行的主键）。

SQL（Structured Query Language)，标准 SQL 由 ANSI 标准委员会管理，从而称为 ANSI SQL。各个 DBMS 都有自己的实现，如 PL/SQL、Transact-SQL 等。

SQL 语句不区分大小写，但是数据库表名、列名和值是否区分依赖于具体的 DBMS 以及配置。

SQL 支持以下三种注释：

# 注释
SELECT *
FROM mytable; -- 注释
/* 注释1
   注释2 */

@前端进阶之旅: 代码已经复制到剪贴板

数据库创建与使用：

CREATE DATABASE test;
USE test;

@前端进阶之旅: 代码已经复制到剪贴板
二、创建表
CREATE TABLE mytable (
  # int 类型，不为空，自增
  id INT NOT NULL AUTO_INCREMENT,
  # int 类型，不可为空，默认值为 1，不为空
  col1 INT NOT NULL DEFAULT 1,
  # 变长字符串类型，最长为 45 个字符，可以为空
  col2 VARCHAR(45) NULL,
  # 日期类型，可为空
  col3 DATE NULL,
  # 设置主键为 id
  PRIMARY KEY (`id`));

@前端进阶之旅: 代码已经复制到剪贴板
三、修改表

添加列

ALTER TABLE mytable
ADD col CHAR(20);

@前端进阶之旅: 代码已经复制到剪贴板

删除列

ALTER TABLE mytable
DROP COLUMN col;

@前端进阶之旅: 代码已经复制到剪贴板

删除表

DROP TABLE mytable;

@前端进阶之旅: 代码已经复制到剪贴板
四、插入

普通插入

INSERT INTO mytable(col1, col2)
VALUES(val1, val2);

@前端进阶之旅: 代码已经复制到剪贴板

插入检索出来的数据

INSERT INTO mytable1(col1, col2)
SELECT col1, col2
FROM mytable2;

@前端进阶之旅: 代码已经复制到剪贴板

将一个表的内容插入到一个新表

CREATE TABLE newtable AS
SELECT * FROM mytable;

@前端进阶之旅: 代码已经复制到剪贴板
五、更新
UPDATE mytable
SET col = val
WHERE id = 1;

@前端进阶之旅: 代码已经复制到剪贴板
六、删除
DELETE FROM mytable
WHERE id = 1;

@前端进阶之旅: 代码已经复制到剪贴板

TRUNCATE TABLE 可以清空表，也就是删除所有行。

TRUNCATE TABLE mytable;

@前端进阶之旅: 代码已经复制到剪贴板

使用更新和删除操作时一定要用 WHERE 子句，不然会把整张表的数据都破坏。可以先用 SELECT 语句进行测试，防止错误删除。

七、查询
DISTINCT

相同值只会出现一次。它作用于所有列，也就是说所有列的值都相同才算相同。

SELECT DISTINCT col1, col2
FROM mytable;

@前端进阶之旅: 代码已经复制到剪贴板
LIMIT

限制返回的行数。可以有两个参数，第一个参数为起始行，从 0 开始；第二个参数为返回的总行数。

返回前 5 行：

SELECT *
FROM mytable
LIMIT 5;

@前端进阶之旅: 代码已经复制到剪贴板
SELECT *
FROM mytable
LIMIT 0, 5;

@前端进阶之旅: 代码已经复制到剪贴板

返回第 3 ~ 5 行：

SELECT *
FROM mytable
LIMIT 2, 3;

@前端进阶之旅: 代码已经复制到剪贴板
八、排序
ASC ：升序（默认）
DESC ：降序

可以按多个列进行排序，并且为每个列指定不同的排序方式：

SELECT *
FROM mytable
ORDER BY col1 DESC, col2 ASC;

@前端进阶之旅: 代码已经复制到剪贴板
























← OS
MySQL →