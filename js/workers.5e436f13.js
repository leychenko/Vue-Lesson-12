"use strict";(self["webpackChunkhomework_12"]=self["webpackChunkhomework_12"]||[]).push([[446],{8304:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(3396),d=a(9242),i=a(7139);const r=e=>((0,n.dD)("data-v-24358a96"),e=e(),(0,n.Cn)(),e),s={class:"container"},o={class:"line"},c=r((()=>(0,n._)("label",{class:"line__label"},"Ім'я",-1))),l={class:"line"},u=r((()=>(0,n._)("label",{class:"line__label"},"Посада",-1)));function _(e,t,a,r,_,k){return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",o,[c,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>_.candidateData.name=e),class:"line__input"},null,512),[[d.nr,_.candidateData.name]])]),(0,n._)("div",l,[u,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>_.candidateData.position=e),class:"line__input"},null,512),[[d.nr,_.candidateData.position]])]),(0,n._)("button",{type:"button",class:"container__button",onClick:t[2]||(t[2]=(...e)=>k.onAdd&&k.onAdd(...e))},(0,i.zw)(k.buttonTitle),1)])}a(560);var k=a(65),v={name:"CandidatesEditor",data(){return{candidateData:{}}},computed:{...(0,k.Se)("candidates",["getCandidateById"]),receivedCandidatesId(){return this.$route.params.id},buttonTitle(){return this.receivedCandidatesId?"Update":"Save"}},created(){this.receivedCandidatesId&&(this.candidateData={...this.getCandidateById(this.receivedCandidatesId)})},methods:{...(0,k.nv)("candidates",["addNewCandidates","changeDataCandidates"]),onAdd(){this.receivedCandidatesId?this.changeDataCandidates(this.candidateData):this.addNewCandidates(this.candidateData),this.$router.push({name:"candidates"})}}},h=a(89);const p=(0,h.Z)(v,[["render",_],["__scopeId","data-v-24358a96"]]);var w=p},2145:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(3396),d=a(9242),i=a(7139);const r=e=>((0,n.dD)("data-v-3eb398f2"),e=e(),(0,n.Cn)(),e),s={class:"container"},o={class:"line"},c=r((()=>(0,n._)("label",{class:"line__label"},"Ім'я",-1))),l={class:"line"},u=r((()=>(0,n._)("label",{class:"line__label"},"Посада",-1)));function _(e,t,a,r,_,k){return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",o,[c,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>_.workerData.name=e),class:"line__input"},null,512),[[d.nr,_.workerData.name]])]),(0,n._)("div",l,[u,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>_.workerData.position=e),class:"line__input"},null,512),[[d.nr,_.workerData.position]])]),(0,n._)("button",{type:"button",class:"container__button",onClick:t[2]||(t[2]=(...e)=>k.onAdd&&k.onAdd(...e))},(0,i.zw)(k.buttonTitle),1)])}a(560);var k=a(65),v={name:"WorkersEditor",data(){return{workerData:{}}},computed:{...(0,k.Se)("workers",["getWorkerById"]),receivedWorkerId(){return this.$route.params.id},buttonTitle(){return this.receivedWorkerId?"Update":"Save"}},created(){this.receivedWorkerId&&(this.workerData={...this.getWorkerById(this.receivedWorkerId)})},methods:{...(0,k.nv)("workers",["changeWorkersData","addNewWorker"]),onAdd(){this.receivedWorkerId?this.changeWorkersData(this.workerData):this.addNewWorker(this.workerData),this.$router.push({name:"workers"})}}},h=a(89);const p=(0,h.Z)(v,[["render",_],["__scopeId","data-v-3eb398f2"]]);var w=p},3923:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});var n=a(3396);const d={class:"about"};function i(e,t,a,i,r,s){const o=(0,n.up)("workers-list");return(0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(o)])}var r=a(7139);const s=e=>((0,n.dD)("data-v-64ecdcf9"),e=e(),(0,n.Cn)(),e),o={class:"about"},c=s((()=>(0,n._)("h2",{class:"title"},"Працівники :",-1))),l={class:"container"},u={class:"item__action"},_=["onClick"],k=["onClick"];function v(e,t,a,d,i,s){const v=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",o,[c,(0,n._)("div",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.getWorkersList,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.id,class:"item"},[(0,n.Uk)((0,r.zw)(t.name)+" - "+(0,r.zw)(t.position)+" ",1),(0,n._)("div",u,[(0,n._)("button",{type:"button",class:"item__button item__button_edit button",onClick:e=>s.onEdit(t.id)},"Edit",8,_),(0,n._)("button",{type:"button",class:"item__button item__button_delete button",onClick:a=>e.deleteWorkers(t.id)},"Delete",8,k)])])))),128))]),(0,n.Wm)(v,{to:{name:"workers-edit"},class:"linkWorker"},{default:(0,n.w5)((()=>[(0,n.Uk)("Додати працівника")])),_:1})])}a(560);var h=a(65),p={name:"WorkersList",computed:{...(0,h.Se)("workers",["getWorkersList"])},methods:{...(0,h.nv)("workers",["deleteWorkers"]),onEdit(e){this.$router.push({name:"workers-edit",params:{id:e}})}}},w=a(89);const m=(0,w.Z)(p,[["render",v],["__scopeId","data-v-64ecdcf9"]]);var b=m,D={name:"WorkersView",components:{WorkersList:b}};const C=(0,w.Z)(D,[["render",i]]);var W=C}}]);
//# sourceMappingURL=workers.5e436f13.js.map