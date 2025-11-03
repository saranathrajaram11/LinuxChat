package main
import "fmt"

func greet(name string)
{
	fmt.Printf("hello Mr.%s ",name)
}

func main()
{

	var name string
	fmt.Scanln(&name)
	greet(name)
}