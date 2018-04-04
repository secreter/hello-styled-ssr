
const React=require('react')
const styled=require('styled-components').default
const styles={
    body:{
        background:'#444',
        padding:'10px'
    },
    box:{
        background:'#fff',
        padding:'20px 20px 5px'

    }
}
const Main=styled.div`
    div.box:not(:last-child){
        margin-bottom:10px
    }
`
const Title = styled.div`
line-height:25px;
min-height:50px;
  img{
    width:50px;
    height:50px;
  }
`
const Comment=styled.ul`
   list-style:none;
   font-style:normal;
   margin:10px 0;
   padding:0;
   background:#eee;
   line-height:25px;
   font-size:14px;
   li{
       padding:8px 30px;
       text-align:justify;
       display:block;
   }
   li:not(.more){
        p:before{
           content:'';
           display:block;
           clear:both;
       }
       p{   margin:0;padding:0;
            span{
                float:right;
                i{
                    font-style:normal;
                }
                img{
                    display:inline-block;
                    width:15px;
                    vertical-align: initial;
                }
            }
       }
       p:after{
            content:'';
            clear:both;
            display:block;
       }
   }
   li:not(:first-child){
        border-top:1px solid #d9d9d9
   }
   li.more{
        text-align:center;
        a{
            margin:0;padding:0;
            text-decoration:none;
            color:#096dd9;
        }
   }
   em{
       font-style:normal;
       color:#eb7350
   }
`
const Image = styled.div`
  float:left
`
const Detail=styled.div`
   margin-left:60px;
   a{   
       display:block;
       font-size:14px;
       font-weight:bold;
       color:#000;
       text-decoration:none;
   }
   p{
       margin:0;
       padding:0;
       text-align:justify;
   }
`
class CommentTpl extends React.Component{
    constructor (props){
        super(props)
        this.state={
            commentState:[]
        }
        this.count=5;
    }
    render(){
        const {data,config,label}=this.props
        return (
            <Main style={styles.body}>
                {
                    data.map((item,index)=>{
                        this.state.commentState.push({state:false,count:5,text:'查看更多',icon:'down'})
                        return (
                            <div className='box' style={styles.box} key={index}>
                                <Title>
                                    <Image>
                                        <img
                                            onError={(e)=>{
                                                e.target.src="http://dlweb.sogoucdn.com/vr/images/7575.png"
                                            }}
                                            src={item.avatar}/>
                                    </Image>
                                    <Detail >
                                        <a href="javascript:void(0)">{item.name}</a>
                                        <small>{item.time}</small>
                                        <p>{item.text}</p>
                                    </Detail>
                                </Title>
                                {
                                    item.comments&&!!item.comments.length&&<Comment>
                                        {   item.comments.map((comment,subindex)=>{
                                            if(subindex<this.state.commentState[index].count){
                                                return (
                                                    <li key={subindex}>
                                                        <p>
                                                            <em>{comment.name}</em>:
                                                            {!!comment.prefixs&&'回复'}
                                                            {!!comment.prefixs&&<em>{comment.prefixs}</em>}
                                                            {comment.text}
                                                            {/*<span><Icon type="like" /><i>{comment.liked!=0?comment.liked:''}</i></span>*/}
                                                            <span><img src='https://dlweb.sogoucdn.com/vr/images/icon_lvff/like_1.png'/><i>{comment.liked!=0?comment.liked:''}</i></span>
                                                        </p>
                                                    </li>
                                                )
                                            }
                                        })
                                        }
                                        {
                                            item.comments&&item.comments.length>this.count&&
                                            <li className='more' ref={(sef)=>{this.more=sef}}>
                                                <a  href='javascript:void(0)'
                                                    onClick={this.loadMore.bind(this,index)}>
                                                    {this.state.commentState[index].text}
                                                    {/*<Icon type={this.state.commentState[index].icon}/>*/}
                                                </a>
                                            </li>
                                        }
                                    </Comment>
                                }
                            </div>
                        )
                    })
                }
            </Main>
        )
    }
    loadMore(clickIndex){
        const {data,config}=this.props
        const commentState=this.state.commentState
        commentState[clickIndex].state=!commentState[clickIndex].state;
        commentState[clickIndex].text='查看更多';
        commentState[clickIndex].count=this.count;
        commentState[clickIndex].icon='down';
        if(commentState[clickIndex].state){
            commentState[clickIndex].text='收起';
            commentState[clickIndex].icon='up';
            commentState[clickIndex].count=data[clickIndex].comments.length;
            // commentState[clickIndex].count=get(data[clickIndex],config.commentName,'','array').length;
        }

        this.setState({
            commentState:commentState
        })
    }

}
CommentTpl.defaultProps={
    data:[{
        text:'建设银行深圳分行校招待遇到底怎样啊，收到的offer没提。↵求问各位前辈，求详解。[微笑][微笑][微笑]',
        name:'曲灵风',
        author:'匿名发布:曲灵风',
        avatar:'http://i9.taou.com/maimai/p/aurl/v3/avatar_xuesheng.png',
        time:'17-12-21',
        comments:[{name:'文聘',prefix:'',text:'开始你的表演建设银行深圳分行校招待遇到底怎样啊，收到的offer没提。↵求问各位前辈，求详解。[微笑][微笑][微笑]建设银行深圳分行校招待遇到底怎样啊，收到的offer没提。↵求问各位前辈，求详解。[微笑][微笑][微笑]建设银行深圳分行校招待遇到底怎样啊，收到的offer没提。↵求问各位前辈，求详解。[微笑][微笑][微笑]',avatar:'http://i9.taou.com/maimai/p/aurl/v3/avatar_xuesheng.png',liked:64568451},
            {name:'萧让',prefix:'',text:'m',avatar:'http://i9.taou.com/maimai/p/aurl/v3/avatar_xuesheng.png',liked:45456462},
            {name:'曲灵风',prefix:'文聘:',text:'求详解[可怜]',liked:3},
            {name:'曲灵风',prefix:'萧让:',text:'求详解',liked:5}]
    },{
        text:'应届生第一年年终奖发吗？发多少？',
        name:'法正',
        author:'匿名发布:法正',
        avatar:'http://i9.taou.com/maimai/p/aurl/v3/avatar_xuesheng.png',
        time:'1天内'
    },{
        text:'应届生第一年年终奖发吗？发多少？',
        name:'法正',
        author:'匿名发布:法正',
        avatar:'http://i9.taou.com/maimai/p/aurl/v3/avatar_xuesheng.png',
        time:'1天内',
        comments:[{name:'元始天尊',prefix:'',text:'所以?',liked:1},
            {name:'萧让',prefix:'',text:'m',avatar:'http://i9.taou.com/maimai/p/aurl/v3/avatar_xuesheng.png',liked:2},
            {name:'曲灵风',prefix:'文聘:',text:'求详解[可怜]',liked:3},
            {name:'萧让',prefix:'',text:'m',liked:4},
            {name:'曲灵风',prefix:'文聘:',text:'求详解[可怜]',liked:5},
            {name:'萧让',prefix:'',text:'m',liked:6},
            {name:'曲灵风',prefix:'文聘:',text:'求详解+1[可怜]',liked:7}]
    }],
    config:{

    }
}

module.exports=CommentTpl
