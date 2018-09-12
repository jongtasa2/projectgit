color=["coral","crimson","gold"];
q=0;

function bg(){
	dd=document.querySelector("body");
	dd.style.background=color[q];
	q++;
	if (q>=3)
	{
		q=0;
	}
};