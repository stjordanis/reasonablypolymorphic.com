var it = {"binds":[{"rec":false,"binds":[{"terms":14,"var":{"name":"$c<$","id":"a-0-20549","info":{"args":[{"strict":"L","use":"U","type":"a"},{"strict":"S","use":"1*U","type":"NonDet m b"}],"poly":["k","m","a","b"],"term":"","result":"NonDet m a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"z","id":"a-1-20506","info":{"args":[],"poly":[],"term":"","result":"a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},{"name":"ds","id":"d-2-20662","info":{"args":[],"poly":[],"term":"","result":"NonDet m b","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U>"}}}],"tag":"Lam","body":{"expr":{"tag":"Var","var":{"name":"ds","id":"d-2-20662"}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DataAlt","con":{"name":"Empty","module":"Polysemy.NonDet.Type"}},"rhs":{"tag":"Glob","var":{"name":"Empty","module":"Polysemy.NonDet.Type","id":"r-20361","info":"Empty"}}},{"binds":[{"name":"a1","id":"a-4-20508","info":{"args":[],"poly":[],"term":"","result":"Bool -> b","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,A>"}}}],"con":{"tag":"DataAlt","con":{"name":"Choose","module":"Polysemy.NonDet.Type"}},"rhs":{"args":[{"args":[{"name":"b4","id":"a-5-20510","info":{"args":[],"poly":[],"term":"","result":"Bool","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}],"tag":"Lam","body":{"tag":"Var","var":{"name":"z","id":"a-1-20506"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Choose","module":"Polysemy.NonDet.Type","id":"r-20362","info":"Choose"}}}}],"val":{"name":"wild","id":"X-3-26","info":{"args":[],"poly":[],"term":"","result":"NonDet m b","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}},{"terms":16,"var":{"name":"$cfmap","id":"a-0-20516","info":{"args":[{"strict":"L","use":"C(U)","type":"a -> b"},{"strict":"S","use":"1*U","type":"NonDet m a"}],"poly":["k","m","a","b"],"term":"","result":"NonDet m b","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"f","id":"a-6-20500","info":{"args":[],"poly":[],"term":"","result":"a -> b","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,C(U)>"}}},{"name":"ds","id":"d-7-20661","info":{"args":[],"poly":[],"term":"","result":"NonDet m a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U>"}}}],"tag":"Lam","body":{"expr":{"tag":"Var","var":{"name":"ds","id":"d-7-20661"}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DataAlt","con":{"name":"Empty","module":"Polysemy.NonDet.Type"}},"rhs":{"tag":"Glob","var":{"name":"Empty","module":"Polysemy.NonDet.Type","id":"r-20361","info":"Empty"}}},{"binds":[{"name":"a1","id":"a-9-20502","info":{"args":[],"poly":[],"term":"","result":"Bool -> a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,C(U)>"}}}],"con":{"tag":"DataAlt","con":{"name":"Choose","module":"Polysemy.NonDet.Type"}},"rhs":{"args":[{"args":[{"name":"b3","id":"a-10-20504","info":{"args":[],"poly":[],"term":"","result":"Bool","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"args":[{"tag":"Var","var":{"name":"b3","id":"a-10-20504"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"a1","id":"a-9-20502"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"f","id":"a-6-20500"}}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Choose","module":"Polysemy.NonDet.Type","id":"r-20362","info":"Choose"}}}}],"val":{"name":"wild","id":"X-8-27","info":{"args":[],"poly":[],"term":"","result":"NonDet m a","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}},{"terms":5,"var":{"name":"$fFunctorNonDet","id":"r-0-20360","info":{"args":[],"poly":["k","m"],"term":"m","result":"Functor (NonDet m)","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$cfmap","id":"a-0-20516"}},{"tag":"Var","var":{"name":"$c<$","id":"a-0-20549"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C:Functor","module":"GHC.Base","id":"r-2980","info":"C:Functor"}}}},{"terms":3,"var":{"name":"$cp1Effect","id":"a-0-20593","info":{"args":[{"strict":"L","use":"A","type":"Functor m"}],"poly":["m"],"term":"m","result":"Functor (NonDet m)","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"$dFunctor","id":"a-11-20643","info":{"args":[],"poly":[],"term":"","result":"Functor m","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}],"tag":"Lam","body":{"tag":"Var","var":{"name":"$fFunctorNonDet","id":"r-0-20360"}}}},{"terms":22,"var":{"name":"$cweave","id":"s-0-20690","info":{"args":[{"strict":"L","use":"U(A,C(C1(U)))","type":"Functor s"},{"strict":"L","use":"A","type":"Functor m"},{"strict":"L","use":"A","type":"Functor n"},{"strict":"L","use":"U","type":"s ()"},{"strict":"L","use":"A","type":"forall x. s (m x) -> n (s x)"},{"strict":"S","use":"1*U","type":"NonDet m a"}],"poly":["s","m","n","a"],"term":"","result":"NonDet m (s a)","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"$dFunctor","id":"a-12-20602","info":{"args":[],"poly":[],"term":"","result":"Functor s","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U(A,C(C1(U)))>"}}},{"name":"$dFunctor","id":"a-13-20603","info":{"args":[],"poly":[],"term":"","result":"Functor m","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}},{"name":"$dFunctor","id":"a-14-20604","info":{"args":[],"poly":[],"term":"","result":"Functor n","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}},{"name":"ds","id":"d-15-20663","info":{"args":[],"poly":[],"term":"","result":"s ()","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},{"name":"ds","id":"d-16-20664","info":{"args":[],"poly":["x"],"term":"","result":"s (m x) -> n (s x)","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}},{"name":"eta","id":"B-17-1","info":{"args":[],"poly":[],"term":"","result":"NonDet m a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U>"}}}],"tag":"Lam","body":{"expr":{"tag":"Var","var":{"name":"eta","id":"B-17-1"}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DataAlt","con":{"name":"Empty","module":"Polysemy.NonDet.Type"}},"rhs":{"tag":"Glob","var":{"name":"Empty","module":"Polysemy.NonDet.Type","id":"r-20361","info":"Empty"}}},{"binds":[{"name":"a1","id":"a-19-20502","info":{"args":[],"poly":[],"term":"","result":"Bool -> a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,C(U)>"}}}],"con":{"tag":"DataAlt","con":{"name":"Choose","module":"Polysemy.NonDet.Type"}},"rhs":{"args":[{"args":[{"name":"b3","id":"a-20-20504","info":{"args":[],"poly":[],"term":"","result":"Bool","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"tag":"Var","var":{"name":"$dFunctor","id":"a-12-20602"}},{"args":[{"tag":"Var","var":{"name":"b3","id":"a-20-20504"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"a1","id":"a-19-20502"}}},{"tag":"Var","var":{"name":"ds","id":"d-15-20663"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"<$","module":"GHC.Base","id":"r-1467","info":"<$"}}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Choose","module":"Polysemy.NonDet.Type","id":"r-20362","info":"Choose"}}}}],"val":{"name":"wild","id":"X-18-27","info":{"args":[],"poly":[],"term":"","result":"NonDet m a","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}},{"terms":1,"var":{"name":"$cweave","id":"a-0-20595","info":{"args":[{"strict":"L","use":"U(A,C(C1(U)))","type":"Functor s"},{"strict":"L","use":"A","type":"Functor m"},{"strict":"L","use":"A","type":"Functor n"},{"strict":"L","use":"U","type":"s ()"},{"strict":"L","use":"A","type":"forall x. s (m x) -> n (s x)"},{"strict":"S","use":"1*U","type":"NonDet m a"}],"poly":["s","m","n","a"],"term":"","result":"NonDet n (s a)","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"tag":"Var","var":{"name":"$cweave","id":"s-0-20690"}}},{"terms":8,"var":{"name":"$choist","id":"s-0-20670","info":{"args":[{"strict":"L","use":"A","type":"Functor m"},{"strict":"L","use":"A","type":"Functor n"},{"strict":"L","use":"A","type":"forall x. m x -> n x"},{"strict":"S","use":"1*U","type":"NonDet m a"}],"poly":["m","n","a"],"term":"","result":"NonDet m a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"$dFunctor","id":"a-21-20626","info":{"args":[],"poly":[],"term":"","result":"Functor m","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}},{"name":"$dFunctor","id":"a-22-20627","info":{"args":[],"poly":[],"term":"","result":"Functor n","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}},{"name":"ds","id":"d-23-20665","info":{"args":[],"poly":["x"],"term":"","result":"m x -> n x","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}},{"name":"v","id":"B-24-2","info":{"args":[],"poly":[],"term":"","result":"NonDet m a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U>"}}}],"tag":"Lam","body":{"tag":"Var","var":{"name":"v","id":"B-24-2"}}}},{"terms":1,"var":{"name":"$choist","id":"a-0-20620","info":{"args":[{"strict":"L","use":"A","type":"Functor m"},{"strict":"L","use":"A","type":"Functor n"},{"strict":"L","use":"A","type":"forall x. m x -> n x"},{"strict":"S","use":"1*U","type":"NonDet m a"}],"poly":["m","n","a"],"term":"","result":"NonDet n a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"tag":"Var","var":{"name":"$choist","id":"s-0-20670"}}},{"terms":4,"var":{"name":"$fEffectNonDet","id":"r-0-20356","info":{"args":[],"poly":[],"term":"m","result":"Effect NonDet","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$cp1Effect","id":"a-0-20593"}},{"tag":"Var","var":{"name":"$cweave","id":"a-0-20595"}},{"tag":"Var","var":{"name":"$choist","id":"a-0-20620"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C:Effect","module":"Polysemy.Effect","id":"r-16514","info":"C:Effect"}}}},{"terms":1,"var":{"name":"$trModule","id":"s-0-20673","info":{"args":[],"poly":[],"term":"","result":"Addr#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"tag":"Lit","lit":{"type":"string","lit":"\"polysemy-0.1.0.0-IzX3okgutsQ7OM1E6vzFzd\""}}},{"terms":2,"var":{"name":"$trModule","id":"s-0-20674","info":{"args":[],"poly":[],"term":"m1","result":"TrName","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$trModule","id":"s-0-20673"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TrNameS","module":"GHC.Types","id":"r-211","info":"TrNameS"}}}},{"terms":1,"var":{"name":"$trModule","id":"s-0-20675","info":{"args":[],"poly":[],"term":"","result":"Addr#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"tag":"Lit","lit":{"type":"string","lit":"\"Polysemy.NonDet.Type\""}}},{"terms":2,"var":{"name":"$trModule","id":"s-0-20676","info":{"args":[],"poly":[],"term":"m1","result":"TrName","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$trModule","id":"s-0-20675"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TrNameS","module":"GHC.Types","id":"r-211","info":"TrNameS"}}}},{"terms":3,"var":{"name":"$trModule","id":"r-0-20366","info":{"args":[],"poly":[],"term":"m","result":"Module","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$trModule","id":"s-0-20674"}},{"tag":"Var","var":{"name":"$trModule","id":"s-0-20676"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Module","module":"GHC.Types","id":"r-282","info":"Module"}}}},{"terms":3,"var":{"name":"$krep","id":"a-0-20656","info":{"args":[],"poly":[],"term":"m1","result":"KindRep","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Glob","var":{"name":"$tcBool","module":"GHC.Types","id":"3-9","info":"$tcBool"}},{"tag":"Glob","var":{"name":"[]","module":"GHC.Types","id":"6-34","info":"[]"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"KindRepTyConApp","module":"GHC.Types","id":"r-5129","info":"KindRepTyConApp"}}}},{"terms":2,"var":{"name":"$krep","id":"a-0-20653","info":{"args":[],"poly":[],"term":"m2","result":"KindRep","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Lit","lit":{"type":"int","lit":"2"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"KindRepVar","module":"GHC.Types","id":"r-5132","info":"KindRepVar"}}}},{"terms":3,"var":{"name":"$krep","id":"a-0-20655","info":{"args":[],"poly":[],"term":"m4","result":"KindRep","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$krep","id":"a-0-20656"}},{"tag":"Var","var":{"name":"$krep","id":"a-0-20653"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"KindRepFun","module":"GHC.Types","id":"r-4098","info":"KindRepFun"}}}},{"terms":2,"var":{"name":"$krep","id":"a-0-20650","info":{"args":[],"poly":[],"term":"m2","result":"KindRep","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Lit","lit":{"type":"int","lit":"0"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"KindRepVar","module":"GHC.Types","id":"r-5132","info":"KindRepVar"}}}},{"terms":3,"var":{"name":"$krep","id":"a-0-20649","info":{"args":[],"poly":[],"term":"m4","result":"KindRep","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$krep","id":"a-0-20650"}},{"tag":"Glob","var":{"name":"krep$*Arr*","module":"GHC.Types","id":"0-521","info":"krep$*Arr*"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"KindRepFun","module":"GHC.Types","id":"r-4098","info":"KindRepFun"}}}},{"terms":2,"var":{"name":"$krep","id":"a-0-20652","info":{"args":[],"poly":[],"term":"m2","result":"KindRep","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Lit","lit":{"type":"int","lit":"1"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"KindRepVar","module":"GHC.Types","id":"r-5132","info":"KindRepVar"}}}},{"terms":1,"var":{"name":"$tcNonDet","id":"s-0-20677","info":{"args":[],"poly":[],"term":"","result":"Addr#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"tag":"Lit","lit":{"type":"string","lit":"\"NonDet\""}}},{"terms":2,"var":{"name":"$tcNonDet","id":"s-0-20678","info":{"args":[],"poly":[],"term":"m1","result":"TrName","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$tcNonDet","id":"s-0-20677"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TrNameS","module":"GHC.Types","id":"r-211","info":"TrNameS"}}}},{"terms":7,"var":{"name":"$tcNonDet","id":"r-0-20374","info":{"args":[],"poly":[],"term":"m","result":"TyCon","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Lit","lit":{"type":"word","lit":"4843670143344670975"}},{"tag":"Lit","lit":{"type":"word","lit":"3046636020655549853"}},{"tag":"Var","var":{"name":"$trModule","id":"r-0-20366"}},{"tag":"Var","var":{"name":"$tcNonDet","id":"s-0-20678"}},{"tag":"Lit","lit":{"type":"int","lit":"1"}},{"tag":"Var","var":{"name":"$krep","id":"a-0-20649"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TyCon","module":"GHC.Types","id":"r-207","info":"TyCon"}}}},{"terms":3,"var":{"name":"$krep","id":"s-0-20679","info":{"args":[],"poly":[],"term":"m2","result":"[KindRep]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$krep","id":"a-0-20653"}},{"tag":"Glob","var":{"name":"[]","module":"GHC.Types","id":"6-34","info":"[]"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":":","module":"GHC.Types","id":"6-7","info":":"}}}},{"terms":3,"var":{"name":"$krep","id":"s-0-20680","info":{"args":[],"poly":[],"term":"m2","result":"[KindRep]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$krep","id":"a-0-20652"}},{"tag":"Var","var":{"name":"$krep","id":"s-0-20679"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":":","module":"GHC.Types","id":"6-7","info":":"}}}},{"terms":3,"var":{"name":"$krep","id":"s-0-20681","info":{"args":[],"poly":[],"term":"m2","result":"[KindRep]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$krep","id":"a-0-20650"}},{"tag":"Var","var":{"name":"$krep","id":"s-0-20680"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":":","module":"GHC.Types","id":"6-7","info":":"}}}},{"terms":3,"var":{"name":"$krep","id":"a-0-20651","info":{"args":[],"poly":[],"term":"m1","result":"KindRep","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$tcNonDet","id":"r-0-20374"}},{"tag":"Var","var":{"name":"$krep","id":"s-0-20681"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"KindRepTyConApp","module":"GHC.Types","id":"r-5129","info":"KindRepTyConApp"}}}},{"terms":1,"var":{"name":"$tc'Empty","id":"s-0-20682","info":{"args":[],"poly":[],"term":"","result":"Addr#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"tag":"Lit","lit":{"type":"string","lit":"\"'Empty\""}}},{"terms":2,"var":{"name":"$tc'Empty","id":"s-0-20683","info":{"args":[],"poly":[],"term":"m1","result":"TrName","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$tc'Empty","id":"s-0-20682"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TrNameS","module":"GHC.Types","id":"r-211","info":"TrNameS"}}}},{"terms":7,"var":{"name":"$tc'Empty","id":"r-0-20370","info":{"args":[],"poly":[],"term":"m","result":"TyCon","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Lit","lit":{"type":"word","lit":"9722895815399788480"}},{"tag":"Lit","lit":{"type":"word","lit":"2663476397974689144"}},{"tag":"Var","var":{"name":"$trModule","id":"r-0-20366"}},{"tag":"Var","var":{"name":"$tc'Empty","id":"s-0-20683"}},{"tag":"Lit","lit":{"type":"int","lit":"3"}},{"tag":"Var","var":{"name":"$krep","id":"a-0-20651"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TyCon","module":"GHC.Types","id":"r-207","info":"TyCon"}}}},{"terms":3,"var":{"name":"$krep","id":"a-0-20654","info":{"args":[],"poly":[],"term":"m4","result":"KindRep","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$krep","id":"a-0-20655"}},{"tag":"Var","var":{"name":"$krep","id":"a-0-20651"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"KindRepFun","module":"GHC.Types","id":"r-4098","info":"KindRepFun"}}}},{"terms":1,"var":{"name":"$tc'Choose","id":"s-0-20684","info":{"args":[],"poly":[],"term":"","result":"Addr#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"tag":"Lit","lit":{"type":"string","lit":"\"'Choose\""}}},{"terms":2,"var":{"name":"$tc'Choose","id":"s-0-20685","info":{"args":[],"poly":[],"term":"m1","result":"TrName","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$tc'Choose","id":"s-0-20684"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TrNameS","module":"GHC.Types","id":"r-211","info":"TrNameS"}}}},{"terms":7,"var":{"name":"$tc'Choose","id":"r-0-20365","info":{"args":[],"poly":[],"term":"m","result":"TyCon","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Lit","lit":{"type":"word","lit":"14096800126965753284"}},{"tag":"Lit","lit":{"type":"word","lit":"10201070999941542009"}},{"tag":"Var","var":{"name":"$trModule","id":"r-0-20366"}},{"tag":"Var","var":{"name":"$tc'Choose","id":"s-0-20685"}},{"tag":"Lit","lit":{"type":"int","lit":"3"}},{"tag":"Var","var":{"name":"$krep","id":"a-0-20654"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TyCon","module":"GHC.Types","id":"r-207","info":"TyCon"}}}}]}],"mod":"Polysemy.NonDet.Type"}