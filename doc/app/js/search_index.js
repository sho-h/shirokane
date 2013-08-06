var search_data = {"index":{"searchIndex":["admin","graph","graphscontroller","graphshelper","group","groupdashboard","groupdashboardscontroller","groupdashboardshelper","groupgraph","groupgraphshelper","groupscontroller","groupshelper","homecontroller","homehelper","logincontroller","loginhelper","setting","settingscontroller","settingshelper","user","userscontroller","usershelper","admincontroller","applicationcontroller","applicationhelper","dashboardscontroller","dashboardshelper","graph","graphscontroller","graphshelper","graphtemplate","group","groupdashboard","groupgraph","logincontroller","loginhelper","setting","tdtable","user","userscontroller","usershelper","admin_authorize()","admin_current_user()","application_title()","create()","create()","create()","create()","create()","csvexport()","destroy()","destroy()","destroy()","destroy()","edit()","edit()","edit()","edit()","edit()","index()","index()","index()","index()","index()","index()","index()","index()","index()","index()","index()","list()","new()","new()","show()","show()","show()","show()","show()","table_name_prefix()","update()","update()","update()","update()","update()","readme"],"longSearchIndex":["admin","admin::graph","admin::graphscontroller","admin::graphshelper","admin::group","admin::groupdashboard","admin::groupdashboardscontroller","admin::groupdashboardshelper","admin::groupgraph","admin::groupgraphshelper","admin::groupscontroller","admin::groupshelper","admin::homecontroller","admin::homehelper","admin::logincontroller","admin::loginhelper","admin::setting","admin::settingscontroller","admin::settingshelper","admin::user","admin::userscontroller","admin::usershelper","admincontroller","applicationcontroller","applicationhelper","dashboardscontroller","dashboardshelper","graph","graphscontroller","graphshelper","graphtemplate","group","groupdashboard","groupgraph","logincontroller","loginhelper","setting","tdtable","user","userscontroller","usershelper","admincontroller#admin_authorize()","admincontroller#admin_current_user()","applicationcontroller#application_title()","admin::groupdashboardscontroller#create()","admin::groupscontroller#create()","admin::logincontroller#create()","admin::userscontroller#create()","logincontroller#create()","graphscontroller#csvexport()","admin::groupscontroller#destroy()","admin::logincontroller#destroy()","admin::userscontroller#destroy()","logincontroller#destroy()","admin::graphscontroller#edit()","admin::groupscontroller#edit()","admin::settingscontroller#edit()","admin::userscontroller#edit()","userscontroller#edit()","admin::graphscontroller#index()","admin::groupdashboardscontroller#index()","admin::groupscontroller#index()","admin::homecontroller#index()","admin::logincontroller#index()","admin::settingscontroller#index()","admin::userscontroller#index()","dashboardscontroller#index()","graphscontroller#index()","logincontroller#index()","userscontroller#index()","admin::groupdashboardscontroller#list()","admin::groupscontroller#new()","admin::userscontroller#new()","admin::graphscontroller#show()","admin::groupscontroller#show()","admin::settingscontroller#show()","admin::userscontroller#show()","graphscontroller#show()","admin::table_name_prefix()","admin::graphscontroller#update()","admin::groupscontroller#update()","admin::settingscontroller#update()","admin::userscontroller#update()","userscontroller#update()",""],"info":[["Admin","","Admin.html","","<p>管理用名前空間用\n"],["Admin::Graph","","Admin/Graph.html","","<p>管理用グラフモデル\n<p>テーブル作成\n<p>rails generate model graph name:string title:string graph_type:integer\nterm:integer x:string …\n"],["Admin::GraphsController","","Admin/GraphsController.html","","<p>グラフ管理用コントローラー\n"],["Admin::GraphsHelper","","Admin/GraphsHelper.html","","<p>管理用グラフヘルパー\n"],["Admin::Group","","Admin/Group.html","","<p>管理用グループモデル\n<p>テーブル作成\n<p>rails generate model group name:string title:string\n"],["Admin::Groupdashboard","","Admin/Groupdashboard.html","","<p>管理用グループダッシュボードモデル\n<p>テーブル作成\n<p>rails generate model groupdashboard group_id:integer graph_id:integer\nview_rank …\n"],["Admin::GroupdashboardsController","","Admin/GroupdashboardsController.html","","<p>グループ別でダッシュボードに表示するグラフを管理\n"],["Admin::GroupdashboardsHelper","","Admin/GroupdashboardsHelper.html","","<p>管理用グループ-ダッシュボードヘルパー\n"],["Admin::Groupgraph","","Admin/Groupgraph.html","","<p>管理用グループグラフモデル\n<p>テーブル作成\n<p>rails generate model groupgraph group_id:integer graph_id:integer\n"],["Admin::GroupgraphsHelper","","Admin/GroupgraphsHelper.html","","<p>管理用グループ-グラフヘルパー\n"],["Admin::GroupsController","","Admin/GroupsController.html","","<p>グループ管理用クラス\n"],["Admin::GroupsHelper","","Admin/GroupsHelper.html","","<p>管理用グループヘルパー\n"],["Admin::HomeController","","Admin/HomeController.html","","<p>ログイン時、非ログイン時の挙動を管理\n"],["Admin::HomeHelper","","Admin/HomeHelper.html","","<p>管理用開始画面ヘルパー\n"],["Admin::LoginController","","Admin/LoginController.html","","<p>管理画面のログイン\n"],["Admin::LoginHelper","","Admin/LoginHelper.html","","<p>管理用ログインヘルパー\n"],["Admin::Setting","","Admin/Setting.html","","<p>管理用パラメーターテーブル\n<p>テーブル作成\n<p>rails generate model setting name:string title:string parameter:string\nvieworder:integer …\n"],["Admin::SettingsController","","Admin/SettingsController.html","","<p>管理用パラメーター管理\n"],["Admin::SettingsHelper","","Admin/SettingsHelper.html","","<p>管理用パラメーターヘルパー\n"],["Admin::User","","Admin/User.html","","<p>管理用ユーザモデル\n<p>テーブル作成\n<p>rails generate model user name:string title:string password_digest:string\nmail:string …\n"],["Admin::UsersController","","Admin/UsersController.html","","<p>ユーザ管理\n"],["Admin::UsersHelper","","Admin/UsersHelper.html","","<p>管理用ユーザヘルパー\n"],["AdminController","","AdminController.html","","<p>管理画面用共通コントローラー\n"],["ApplicationController","","ApplicationController.html","","<p>ApplicationController\n"],["ApplicationHelper","","ApplicationHelper.html","","<p>ApplicationHelper\n"],["DashboardsController","","DashboardsController.html","","<p>ダッシュボード\n"],["DashboardsHelper","","DashboardsHelper.html","",""],["Graph","","Graph.html","","<p>グラフモデル\n<p>テーブル作成\n<p>rails generate model graph name:string title:string graph_type:integer\nterm:integer x:string …\n"],["GraphsController","","GraphsController.html","","<p>グラフ表示\n"],["GraphsHelper","","GraphsHelper.html","","<p>グラフヘルパー\n"],["Graphtemplate","","Graphtemplate.html","","<p>グラフ用テンプレートも出る\n<p>テーブル作成\n<p>rails generate model graphtemplate name:string linecolor:string\nbgfrom:string bgto:string …\n"],["Group","","Group.html","","<p>グループテーブル\n<p>テーブル作成\n<p>rails generate model group name:string title:string\n"],["Groupdashboard","","Groupdashboard.html","","<p>グループダッシュボードモデル\n<p>テーブル作成\n<p>rails generate model groupdashboard group_id:integer graph_id:integer\nview_rank:integer …\n"],["Groupgraph","","Groupgraph.html","","<p>グループグラフモデル\n<p>テーブル作成\n<p>rails generate model groupgraph group_id:integer graph_id:integer\n"],["LoginController","","LoginController.html","","<p>グラフ表示画面のログイン処理\n"],["LoginHelper","","LoginHelper.html","","<p>ログインヘルパー\n"],["Setting","","Setting.html","","<p>パラメータモデル\n<p>テーブル作成\n<p>rails generate model setting name:string title:string parameter:string\nvieworder:integer …\n"],["Tdtable","","Tdtable.html","","<p>TreasureData用データモデル\n<p>テーブル作成(postgresql)\n<p>create table td_xxx(td_time timestamp with time zone,td_count decimal); …\n"],["User","","User.html","","<p>ユーザテーブル\n<p>テーブル作成\n<p>rails generate model user name:string title:string password_digest:string\nmail:string group_id …\n"],["UsersController","","UsersController.html","","<p>ユーザ情報更新\n"],["UsersHelper","","UsersHelper.html","","<p>ユーザヘルパー\n"],["admin_authorize","AdminController","AdminController.html#method-i-admin_authorize","()","<p>管理者ログインチェック\n"],["admin_current_user","AdminController","AdminController.html#method-i-admin_current_user","()","<p>管理者用-現在のアカウント設定\n"],["application_title","ApplicationController","ApplicationController.html#method-i-application_title","()","<p>通常ユーザ用-現在のアカウント設定\n"],["create","Admin::GroupdashboardsController","Admin/GroupdashboardsController.html#method-i-create","()","<p>関連グラフの更新\n"],["create","Admin::GroupsController","Admin/GroupsController.html#method-i-create","()","<p>POST /admin/groups POST /admin/groups.json\n"],["create","Admin::LoginController","Admin/LoginController.html#method-i-create","()","<p>ユーザのログイン処理を行う\n"],["create","Admin::UsersController","Admin/UsersController.html#method-i-create","()","<p>POST /admin/users POST /admin/users.json\n"],["create","LoginController","LoginController.html#method-i-create","()","<p>ユーザのログイン処理を行う\n"],["csvexport","GraphsController","GraphsController.html#method-i-csvexport","()","<p>csv出力処理\n"],["destroy","Admin::GroupsController","Admin/GroupsController.html#method-i-destroy","()","<p>DELETE /admin/groups/1 DELETE /admin/groups/1.json\n"],["destroy","Admin::LoginController","Admin/LoginController.html#method-i-destroy","()","<p>ユーザのログアウト処理を行う\n"],["destroy","Admin::UsersController","Admin/UsersController.html#method-i-destroy","()","<p>DELETE /admin/users/1 DELETE /admin/users/1.json\n"],["destroy","LoginController","LoginController.html#method-i-destroy","()","<p>ユーザのログアウト処理を行う\n"],["edit","Admin::GraphsController","Admin/GraphsController.html#method-i-edit","()","<p>GET /admin/graphs/1/edit\n"],["edit","Admin::GroupsController","Admin/GroupsController.html#method-i-edit","()","<p>GET /admin/groups/1/edit\n"],["edit","Admin::SettingsController","Admin/SettingsController.html#method-i-edit","()","<p>GET /admin/settings/1/edit\n"],["edit","Admin::UsersController","Admin/UsersController.html#method-i-edit","()","<p>GET /admin/users/1/edit\n"],["edit","UsersController","UsersController.html#method-i-edit","()",""],["index","Admin::GraphsController","Admin/GraphsController.html#method-i-index","()","<p>GET /admin/graphs GET /admin/graphs.json\n"],["index","Admin::GroupdashboardsController","Admin/GroupdashboardsController.html#method-i-index","()",""],["index","Admin::GroupsController","Admin/GroupsController.html#method-i-index","()","<p>GET /admin/groups GET /admin/groups.json\n"],["index","Admin::HomeController","Admin/HomeController.html#method-i-index","()",""],["index","Admin::LoginController","Admin/LoginController.html#method-i-index","()",""],["index","Admin::SettingsController","Admin/SettingsController.html#method-i-index","()","<p>GET /admin/settings GET /admin/settings.json\n"],["index","Admin::UsersController","Admin/UsersController.html#method-i-index","()","<p>GET /admin/users GET /admin/users.json\n"],["index","DashboardsController","DashboardsController.html#method-i-index","()","<p>ダッシュボード用\n"],["index","GraphsController","GraphsController.html#method-i-index","()","<p>グラフ用画面\n"],["index","LoginController","LoginController.html#method-i-index","()",""],["index","UsersController","UsersController.html#method-i-index","()",""],["list","Admin::GroupdashboardsController","Admin/GroupdashboardsController.html#method-i-list","()","<p>GET /admin/groupdashboards/1/list\n"],["new","Admin::GroupsController","Admin/GroupsController.html#method-i-new","()","<p>GET /admin/groups/new\n"],["new","Admin::UsersController","Admin/UsersController.html#method-i-new","()","<p>GET /admin/users/new\n"],["show","Admin::GraphsController","Admin/GraphsController.html#method-i-show","()","<p>GET /admin/graphs/1 GET /admin/graphs/1.json\n"],["show","Admin::GroupsController","Admin/GroupsController.html#method-i-show","()","<p>GET /admin/groups/1 GET /admin/groups/1.json\n"],["show","Admin::SettingsController","Admin/SettingsController.html#method-i-show","()","<p>GET /admin/settings/1 GET /admin/settings/1.json\n"],["show","Admin::UsersController","Admin/UsersController.html#method-i-show","()","<p>GET /admin/users/1 GET /admin/users/1.json\n"],["show","GraphsController","GraphsController.html#method-i-show","()","<p>表示用処理\n"],["table_name_prefix","Admin","Admin.html#method-c-table_name_prefix","()","<p>テーブル名のプレフィックス\n"],["update","Admin::GraphsController","Admin/GraphsController.html#method-i-update","()","<p>PATCH/PUT /admin/graphs/1 PATCH/PUT /admin/graphs/1.json\n"],["update","Admin::GroupsController","Admin/GroupsController.html#method-i-update","()","<p>PATCH/PUT /admin/groups/1 PATCH/PUT /admin/groups/1.json\n"],["update","Admin::SettingsController","Admin/SettingsController.html#method-i-update","()","<p>PATCH/PUT /admin/settings/1 PATCH/PUT /admin/settings/1.json\n"],["update","Admin::UsersController","Admin/UsersController.html#method-i-update","()","<p>PATCH/PUT /admin/users/1 PATCH/PUT /admin/users/1.json\n"],["update","UsersController","UsersController.html#method-i-update","()","<p>PATCH/PUT /admin/users/1 PATCH/PUT /admin/users/1.json\n"],["README","","README_rdoc.html","","<p>README\n<p>This README would normally document whatever steps are necessary to get the\napplication up and …\n"]]}}